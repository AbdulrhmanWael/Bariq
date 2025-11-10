import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Lock, MapPin, Bell, CreditCard, Plus, X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const phoneRegex = /^\+?[0-9 ()-]{7,20}$/;

const ShippingAddressSchema = z.object({
  street: z.string().min(1, "Street address is required"),
  apt: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),
  zip: z.string().min(1, "ZIP/Postal code is required"),
  country: z.string().min(1, "Country is required"),
});

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().regex(phoneRegex, "Invalid phone number").optional(),
  currentPassword: z.string().optional(),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .optional(),
  confirmNewPassword: z.string().optional(),
  shipping: ShippingAddressSchema,
  notifications: z.object({
    orderUpdates: z.boolean(),
    promotions: z.boolean(),
    newArrivals: z.boolean(),
    blogPosts: z.boolean(),
  }),
});

type FormSchema = z.infer<typeof schema>;

// Example payment card type
type Card = {
  id: string;
  brand: string;
  last4: string;
  expires: string;
  isDefault?: boolean;
};

type CardFormSchema = {
  brand: string;
  last4: string;
  expires: string;
  isDefault?: boolean;
};

export default function ProfileSettings() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+20 1234567890",
      currentPassword: undefined,
      newPassword: undefined,
      confirmNewPassword: undefined,
      shipping: {
        street: "",
        apt: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
      notifications: {
        orderUpdates: true,
        promotions: true,
        newArrivals: false,
        blogPosts: false,
      },
    },
  });

  const [cards, setCards] = useState<Card[]>([
    {
      id: uuidv4(),
      brand: "Visa",
      last4: "4242",
      expires: "12/2025",
      isDefault: true,
    },
  ]);

  const notifications = watch("notifications");

  async function onSubmit(data: FormSchema) {
    if (data.newPassword && data.newPassword !== data.confirmNewPassword) {
      alert("New password and confirmation do not match");
      return;
    }

    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to save");
      }

      const json = await res.json();
      console.log("Saved", json);
      alert("Profile saved successfully");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      alert("Save failed: " + (err.message || "Unknown error"));
    }
  }

  const [showModal, setShowModal] = useState(false);
  const [cardForm, setCardForm] = useState<CardFormSchema>({
    brand: "",
    last4: "",
    expires: "",
  });

  const addCard = () => {
    const newCard: Card = {
      id: uuidv4(),
      brand: cardForm.brand,
      last4: cardForm.last4,
      expires: cardForm.expires,
    };
    setCards((c) => [...c, newCard]);
    setCardForm({ brand: "", last4: "", expires: "" });
    setShowModal(false);
  };

  const removeCard = (id: string) => {
    setCards((c) => c.filter((card) => card.id !== id));
  };

  const setDefault = (id: string) =>
    setCards((c) => c.map((card) => ({ ...card, isDefault: card.id === id })));

  return (
    <div className="mx-auto my-8 bg-white rounded shadow-sm p-6">
      <header className="flex items-center gap-4 pb-6 mb-6">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
          <User className="text-gray-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold">John&nbsp;Doe</h2>
          <p className="text-sm text-gray-500">john.doe@example.com</p>
          <button className="mt-2 text-sm text-pink-600">
            Change Profile Picture
          </button>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <section>
          <div className="flex items-center gap-2 mb-4">
            <User size={16} />
            <h3 className="font-semibold">Personal Information</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                First Name
              </label>
              <input {...register("firstName")} className="w-full input" />
              {errors.firstName && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                Last Name
              </label>
              <input {...register("lastName")} className="w-full input" />
              {errors.lastName && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                Email Address
              </label>
              <input {...register("email")} className="w-full input" />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                Phone Number
              </label>
              <input {...register("phone")} className="w-full input" />
              {errors.phone && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Lock size={16} />
            <h3 className="font-semibold">Change Password</h3>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 md:col-span-1">
              <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                Current Password
              </label>
              <input
                type="password"
                {...register("currentPassword")}
                className="w-full input"
              />
            </div>
            <div className="col-span-3 md:col-span-1">
              <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                New Password
              </label>
              <input
                type="password"
                {...register("newPassword")}
                className="w-full input"
              />
              {errors.newPassword && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.newPassword.message}
                </p>
              )}
            </div>
            <div className="col-span-3 md:col-span-1">
              <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                {...register("confirmNewPassword")}
                className="w-full input"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={16} />
            <h3 className="font-semibold">Shipping Address</h3>
          </div>

          <div className="space-y-3">
            <div>
              <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                Street Address
              </label>
              <input
                {...register("shipping.street")}
                className="w-full input"
              />
              {errors.shipping?.street && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.shipping.street.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                  Apt/Suite (Optional)
                </label>
                <input {...register("shipping.apt")} className="w-full input" />
              </div>
              <div>
                <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                  City
                </label>
                <input
                  {...register("shipping.city")}
                  className="w-full input"
                />
                {errors.shipping?.city && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.shipping.city.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                  ZIP/Postal Code
                </label>
                <input {...register("shipping.zip")} className="w-full input" />
                {errors.shipping?.zip && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.shipping.zip.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                  State/Province
                </label>
                <input
                  {...register("shipping.state")}
                  className="w-full input"
                />
                {errors.shipping?.state && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.shipping.state.message}
                  </p>
                )}
              </div>
              <div className="col-span-2">
                <label htmlFor="f" className="block text-sm text-gray-600 mb-1">
                  Country
                </label>
                <input
                  {...register("shipping.country")}
                  className="w-full input"
                />
                {errors.shipping?.country && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.shipping.country.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Bell size={16} />
            <h3 className="font-semibold">Notifications</h3>
          </div>

          <div className="space-y-4">
            <ToggleRow
              label="Order Updates"
              description="Receive notifications about your order status"
              name="notifications.orderUpdates"
              register={register}
              checked={notifications?.orderUpdates}
            />
            <ToggleRow
              label="Promotions and Discounts"
              description="Receive emails about sales and special offers"
              name="notifications.promotions"
              register={register}
              checked={notifications?.promotions}
            />
            <ToggleRow
              label="New Arrivals"
              description="Be the first to know about new products"
              name="notifications.newArrivals"
              register={register}
              checked={notifications?.newArrivals}
            />
            <ToggleRow
              label="Blog Posts & News"
              description="Get updates on jewelry trends and care tips"
              name="notifications.blogPosts"
              register={register}
              checked={notifications?.blogPosts}
            />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CreditCard size={16} />
              <h3 className="font-semibold">Payment Methods</h3>
            </div>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 border rounded px-3 py-1 text-sm"
            >
              <Plus size={14} /> Add New
            </button>
          </div>

          <div className="space-y-3">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex items-center justify-between border rounded p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-8 bg-blue-500 rounded-sm" />
                  <div>
                    <div className="font-medium">
                      {card.brand} ending in {card.last4}
                    </div>
                    <div className="text-sm text-gray-500">
                      Expires {card.expires}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {card.isDefault && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      Default
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setDefault(card.id)}
                    className="text-sm"
                  >
                    Make Default
                  </button>
                  <button
                    type="button"
                    onClick={() => removeCard(card.id)}
                    className="text-sm text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity">
            <div className="bg-white rounded shadow-lg p-6 w-96 relative animate-fadeIn">
              <button
                className="absolute top-2 right-2"
                onClick={() => setShowModal(false)}
              >
                <X />
              </button>
              <h3 className="text-lg font-semibold mb-4">Add New Card</h3>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Card Brand"
                  value={cardForm.brand}
                  onChange={(e) =>
                    setCardForm({ ...cardForm, brand: e.target.value })
                  }
                  className="w-full input"
                />
                <input
                  type="text"
                  placeholder="Last 4 digits"
                  maxLength={4}
                  value={cardForm.last4}
                  onChange={(e) =>
                    setCardForm({ ...cardForm, last4: e.target.value })
                  }
                  className="w-full input"
                />
                <input
                  type="text"
                  placeholder="Expiry MM/YYYY"
                  value={cardForm.expires}
                  onChange={(e) =>
                    setCardForm({ ...cardForm, expires: e.target.value })
                  }
                  className="w-full input"
                />
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={addCard}
                  className="px-4 py-2 bg-pink-600 text-white rounded"
                >
                  Add Card
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-pink-600 text-white px-5 py-2 rounded hover:opacity-95 disabled:opacity-60"
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}

function ToggleRow({
  label,
  description,
  name,
  register,
  checked,
}: Readonly<{
  label: string;
  description?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  checked?: boolean;
}>) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="font-medium">{label}</div>
        {description && (
          <div className="text-sm text-gray-500">{description}</div>
        )}
      </div>

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...register(name as any)}
          defaultChecked={checked}
          className="sr-only peer"
        />

        {/* Track */}
        <div className="relative w-11 h-6 bg-gray-200 rounded-full transition-colors peer-checked:bg-pink-600 peer-focus:ring-2 peer-focus:ring-pink-300">
          <span
            className="absolute top-0.5 h-5 w-5 bg-white rounded-full shadow transition-all duration-200"
            style={{
              left: checked ? "calc(100% - 1.25rem)" : "0.125rem",
            }}
          />
        </div>
      </label>
    </div>
  );
}
