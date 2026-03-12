"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-brand-dark pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-2xl text-base text-brand-gray-400 sm:mt-4 sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
