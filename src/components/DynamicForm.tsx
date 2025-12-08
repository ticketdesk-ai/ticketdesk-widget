import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { ChatBotConfig } from '../types/widget';

interface DynamicFormProps {
  onSubmit: (data: Record<string, string>) => void;
  config: ChatBotConfig;
}

export function DynamicForm({ onSubmit, config }: DynamicFormProps) {
  const initialState = (config.fields || []).reduce((acc, field) => {
    acc[field] = '';
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] =
    useState<Record<string, string>>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-3 w-full">
          {config.fields?.map((field) => (
            <input
              key={field}
              type={field === 'email' ? 'email' : 'text'}
              value={formData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder={`Your ${field}`}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ '--tw-ring-color': config.color } as React.CSSProperties}
              disabled={isSubmitting}
              required
            />
          ))}
        </div>

        <button
          type="submit"
          className="self-start px-3 py-2 text-sm bg-white text-black rounded-lg border border-gray-300 hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center"
        >
          Submit <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
