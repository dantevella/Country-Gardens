"use client";

import { useSidebar } from "./SidebarContext";

/**
 * Full-viewport dimmer shown behind the sidebar drawer. Clicking it closes
 * the drawer. Styled by `.sidebar-overlay`.
 */
export function SidebarOverlay() {
  const { open, close } = useSidebar();
  return (
    <div
      className={`sidebar-overlay${open ? " open" : ""}`}
      onClick={close}
      aria-hidden
    />
  );
}
