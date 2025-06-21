"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";

const demoFaqs = [
  {
    _id: "1",
    question: "What software development services does Zufan Tech offer?",
    answer:
      "Zufan Tech provides end-to-end software solutions, including web and mobile app development, cloud architecture, API integrations, and AI-driven applications. We specialize in custom software tailored to your business needs.",
  },
  {
    _id: "2",
    question: "What technologies does Zufan Tech use?",
    answer:
      "We leverage modern tech stacks like Next.js, Node.js, React Native, Python, AWS, and Kubernetes. Our team selects tools based on project requirements to ensure scalability and performance.",
  },
  {
    _id: "3",
    question: "How does Zufan Tech ensure project quality?",
    answer:
      "Our development process includes rigorous code reviews, automated testing, and continuous integration. We follow agile methodologies to deliver high-quality, maintainable software on time.",
  },
  {
    _id: "4",
    question: "What is the typical timeline for a software project?",
    answer:
      "Timelines vary based on complexity. Simple MVPs can take 4-8 weeks, while enterprise solutions may require 3-6 months. We provide detailed timelines after scoping your project.",
  },
  {
    _id: "5",
    question: "How does Zufan Tech handle data security?",
    answer:
      "We implement industry-standard security practices, including encryption, secure APIs, and compliance with GDPR and OWASP guidelines. Regular audits ensure your data stays protected.",
  },
  {
    _id: "6",
    question: "Can Zufan Tech support ongoing maintenance?",
    answer:
      "Yes, we offer post-launch support, including bug fixes, updates, and feature enhancements. Our maintenance plans are tailored to keep your software running smoothly.",
  },
  {
    _id: "7",
    question: "How do I start a project with Zufan Tech?",
    answer:
      "Contact us via our website form, email, or phone. We’ll schedule a consultation to understand your needs, propose a solution, and outline the next steps for development.",
  },
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(demoFaqs[0]?._id || null);
  const [questions] = useState(demoFaqs);

  const toggleQuestion = (id: string) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#F9F7F7] py-16 dark:bg-gray-900 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Your Questions, Answered"
          paragraph="Explore common questions about our software development services, processes, and technologies."
          center
          mb="48px"
        />

        {/* FAQ Accordion List */}
        <div className="space-y-6">
          {questions.map((q) => {
            const isActive = activeQuestion === q._id;
            return (
              <div
                key={q._id}
                className={`
                  rounded-lg border border-[#DBE2EF] bg-[#F9F7F7] transition-all duration-300
                  dark:border-[#3F72AF]/30 dark:bg-gray-800
                  ${isActive ? "shadow-md shadow-[#3F72AF]/20" : "hover:shadow-md"}
                `}
              >
                <button
                  className="flex w-full items-center justify-between p-5 md:p-6 text-left group focus:outline-none"
                  onClick={() => toggleQuestion(q._id)}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${q._id}`}
                >
                  <span
                    className={`
                      text-lg font-semibold
                      ${isActive ? "text-[#3F72AF]" : "text-[#112D4E] group-hover:text-[#3F72AF] dark:text-[#F9F7F7] dark:group-hover:text-[#3F72AF]"}
                      transition-colors duration-200
                    `}
                  >
                    {q.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {isActive ? (
                      <Minus className="h-6 w-6 text-[#3F72AF] transition-transform duration-300" />
                    ) : (
                      <Plus className="h-6 w-6 text-[#112D4E]/70 group-hover:text-[#3F72AF] dark:text-[#DBE2EF]/80 dark:group-hover:text-[#3F72AF] transition-colors duration-300" />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${q._id}`}
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#112D4E]/70 dark:text-[#DBE2EF]/80">
                      <p className="text-base leading-relaxed">{q.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;