"use client";

import { ReactNode, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

type FAQItem = {
  id: number;
  icon: ReactNode;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: 1,
    icon: <FaFacebookF />,
    question: "Facebook",
    answer: "Follow us on Facebook for updates and community news.",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    question: "LinkedIn",
    answer: "Connect with us on LinkedIn for professional updates.",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    question: "Twitter / X",
    answer: "Stay up-to-date with our latest tweets and announcements.",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    question: "Instagram",
    answer: "Check out our Instagram for behind-the-scenes and visuals.",
  },
];

export default function SocialFAQs() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full  text-white">
      {faqData.map((item) => (
        <div
          key={item.id}
          className="border-b border-gray-600 py-4 cursor-pointer"
          onClick={() => toggleFAQ(item.id)}
        >
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2 text-lg">
              <span className="text-primary-main">{item.icon}</span>
              {item.question}
            </div>
            <div>
              {openId === item.id ? (
                <FiMinus className="text-xl" />
              ) : (
                <FiPlus className="text-xl" />
              )}
            </div>
          </div>

          {openId === item.id && (
            <p className="mt-2 text-sm text-gray-300">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
