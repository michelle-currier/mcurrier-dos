import React from "react";

export const metadata = {
  title: "Reset Password - Simple",
  description: "Page description",
};
// const styles: React.CSSProperties = {
//   backgroundColor: "#10439f",
//   backgroundImage:
//     "radial-gradient(at 23% 16%, #10439f 0%, transparent 60%), radial-gradient(at 36% 1%, #874ccc 0%, transparent 50%), radial-gradient(at 85% 77%, #c65bcf 0%, transparent 40%), radial-gradient(at 34% 42%, #f27bbd 0%, transparent 30%)",
// };
export default function ResetPassword() {
  return (
    <div>
      {/* <div style={styles}> */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-indigo-800">Projects</h1>
      </div>

      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="corybarker@email.com"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}
