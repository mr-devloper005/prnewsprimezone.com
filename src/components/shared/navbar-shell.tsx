"use client";

import { Suspense } from "react";
import { PressReleaseNavbar } from "@/components/shared/press-release-navbar";

export function NavbarShell() {
  return (
    <Suspense fallback={null}>
      <PressReleaseNavbar />
    </Suspense>
  );
}
