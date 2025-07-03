import { useState, useEffect } from 'react';

interface ValidationRule {
  required?: boolean;
  email?: boolean;
  url?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

interface FieldValidation {
  [fieldName: string]: ValidationRule;
}

interface ValidationResult {
  [fieldName: string]: string | null;
}

export const useFormValidation = (rules: FieldValidation, data: Record<string, string>) => {
  const [errors, setErrors] = useState<ValidationResult>({});
  const [isValid, setIsValid] = useState(false);

  const validateField = (fieldName: string, value: string): string | null => {
    const rule = rules[fieldName];
    if (!rule) return null;

    if (rule.required && (!value || value.trim().length === 0)) {
      return 'This field is required';
    }

    if (rule.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }

    if (rule.url && value && !/^https?:\/\/.+\..+/.test(value)) {
      return 'Please enter a valid URL';
    }

    if (rule.minLength && value && value.length < rule.minLength) {
      return `Must be at least ${rule.minLength} characters`;
    }

    if (rule.maxLength && value && value.length > rule.maxLength) {
      return `Must be no more than ${rule.maxLength} characters`;
    }

    if (rule.pattern && value && !rule.pattern.test(value)) {
      return 'Invalid format';
    }

    if (rule.custom && value) {
      return rule.custom(value);
    }

    return null;
  };

  useEffect(() => {
    const newErrors: ValidationResult = {};
    let hasErrors = false;

    Object.keys(rules).forEach(fieldName => {
      const error = validateField(fieldName, data[fieldName] || '');
      newErrors[fieldName] = error;
      if (error) hasErrors = true;
    });

    setErrors(newErrors);
    setIsValid(!hasErrors);
  }, [data, rules]);

  const validateSingleField = (fieldName: string, value: string) => {
    const error = validateField(fieldName, value);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
    return error;
  };

  return {
    errors,
    isValid,
    validateField: validateSingleField
  };
};