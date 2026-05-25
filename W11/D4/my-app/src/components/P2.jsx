import { useState } from "react";

// Validation and error messages
const initialFormData = {
  email: "",
  password: "",
};

export function ValidationForm() {
  // Store current form values
  const [formData, setFormData] = useState(initialFormData);

  // Store validation errors
  const [errors, setErrors] = useState({});

  // Track touched fields
  const [touched, setTouched] = useState({});

  // Track modified fields
  const [dirty, setDirty] = useState({});

  // Validation function
  function validate(values) {
    const newErrors = {};

    // Email validation
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!values.password.trim()) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  }

  // Handle input change
  function handleChange(event) {
    const { name, value } = event.target;

    const updatedValues = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedValues);
    setErrors(validate(updatedValues));

    setDirty((prevDirty) => ({
      ...prevDirty,
      [name]: value !== initialFormData[name],
    }));
  }

  // Handle blur
  function handleBlur(event) {
    const { name } = event.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  }

  // Handle form submit
  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(formData);

    setErrors(validationErrors);

    setTouched({
      email: true,
      password: true,
    });

    // Submit only if no errors
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully");

      // Reset form
      setFormData(initialFormData);
      setErrors({});
      setTouched({});
      setDirty({});
    }
  }

  // Form validity check
  const isFormValid =
    formData.email.trim() !== "" &&
    formData.password.trim() !== "" &&
    Object.keys(validate(formData)).length === 0;

  return (
    <section>
      <h2>Form Validation Example</h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter email"
          />
        </div>

        {touched.email && errors.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}

        <br />

        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter password"
          />
        </div>

        {touched.password && errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}

        <br />

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </section>
  );
}