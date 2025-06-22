"use client";

import React from "react";
import { Column, Flex } from "@/once-ui/components";
import Image from "next/image";

export default function Loading() {
  return (
    <Flex
      fillWidth
      fillHeight
      vertical="center"
      horizontal="center"
      style={{
        minHeight: "70vh",
      }}
    >
      <Column horizontal="center" vertical="center" gap="l">
        <div className="rotating-logo">
          <Image 
            src="/logo.png" 
            alt="Tonify Logo" 
            width={120} 
            height={120} 
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            display: "inline-block",
            width: "48px",
            height: "48px",
            border: "5px solid rgba(var(--color-brand-foreground-medium-rgb), 0.3)",
            borderRadius: "50%",
            borderTopColor: "var(--color-brand-foreground-medium)",
            animation: "spin 1s linear infinite",
          }}
        />
      </Column>
      <style jsx global>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Flex>
  );
} 