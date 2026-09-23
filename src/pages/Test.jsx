import { useReducer } from "react";
import { useRef } from "react";
function PageHeader({ title }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center bg-fuchsia-800 px-4 text-white shadow-md sm:px-8">
      <h1 className="text-xl font-bold tracking-tight sm:text-2xl">{title}</h1>
    </header>
  );
}

function FormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  emailEl,
  required = false,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold tracking-wider text-neutral-600 uppercase"
      >
        {label}
      </label>
      <input
        ref={emailEl}
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-10 w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3.5 text-sm text-neutral-900 transition-colors placeholder:text-neutral-400 focus:border-fuchsia-700 focus:bg-white focus:ring-2 focus:ring-fuchsia-700/20 focus:outline-none"
      />
    </div>
  );
}

function PrimaryButton({ children, type = "button", onClick, disabled }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-fuchsia-800 px-6 font-medium text-white transition-all hover:bg-fuchsia-900 focus:ring-2 focus:ring-fuchsia-800 focus:ring-offset-2 focus:outline-none active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-fuchsia-800 disabled:active:scale-100"
    >
      {children}
    </button>
  );
}

function AuthCard({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-sm flex-col gap-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl sm:p-8"
    >
      {children}
    </form>
  );
}

const initialFormState = {
  email: "",
  password: "",
  isValid: false,
};

function formReducer(state, action) {
  if (action.type === "Password Input") {
    const isValid = state.email.includes("@") && action.password.length > 6;
    return {
      ...state,
      password: action.password,
      isValid,
    };
  }

  if (action.type === "Email Input") {
    const isValid = action.email.includes("@") && state.password.length > 6;
    return {
      ...state,
      email: action.email,
      isValid,
    };
  }

  return state;
}

export default function Test() {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const emailEl = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console;
  };

  return (
    <div className="flex min-h-screen flex-col bg-neutral-100 text-neutral-900">
      <PageHeader title="A Typical Page" />
      <main className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-8">
        <AuthCard onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <FormField
              id="email"
              label="E-Mail"
              emailEl={emailEl}
              type="email"
              placeholder="you@example.com"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "Email Input", email: e.target.value })
              }
              required
            />

            <FormField
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "Password Input", password: e.target.value })
              }
              required
            />
          </div>

          <div className="mt-2">
            <PrimaryButton type="submit" disabled={!state.isValid}>
              Login
            </PrimaryButton>
          </div>
        </AuthCard>
      </main>
    </div>
  );
}
