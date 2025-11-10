import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const phoneRegex = /^\+?[0-9 ()-]{7,20}$/;

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  phone: z.string().regex(phoneRegex).optional(),
  currentPassword: z.string().optional(),
  newPassword: z.string().min(8).optional(),
  confirmNewPassword: z.string().optional(),
});

type FormSchema = z.infer<typeof schema>;

export default function UserProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+20 1234567890",
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FormSchema) => {
    if (data.newPassword && data.newPassword !== data.confirmNewPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      alert("Profile saved");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert("Save failed: " + (err.message || "Unknown error"));
    }
  };

  return (
    <div className="mx-auto p-6 bg-white rounded shadow">
      <header className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
          <User className="text-gray-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-sm text-gray-500">john.doe@example.com</p>
          <button className="mt-2 text-sm text-pink-600">
            Change Profile Picture
          </button>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <section>
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <User size={16} /> Personal Info
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                {...register("firstName")}
                placeholder="First Name"
                className="w-full input"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("lastName")}
                placeholder="Last Name"
                className="w-full input"
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("email")}
                placeholder="Email"
                className="w-full input"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                {...register("phone")}
                placeholder="Phone"
                className="w-full input"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Lock size={16} /> Change Password
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="password"
              {...register("currentPassword")}
              placeholder="Current Password"
              className="w-full input"
            />
            <input
              type="password"
              {...register("newPassword")}
              placeholder="New Password"
              className="w-full input"
            />
            <input
              type="password"
              {...register("confirmNewPassword")}
              placeholder="Confirm Password"
              className="w-full input"
            />
          </div>
        </section>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-pink-600 text-white px-5 py-2 rounded hover:opacity-95 disabled:opacity-60"
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/profile-settings")}
            className="bg-pink-600 text-white px-4 py-2 rounded mb-6"
          >
            Go to Profile Settings
          </button>
        </div>
      </form>
    </div>
  );
}
