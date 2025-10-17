import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";

import Header from "../Header";

vi.mock("next/image", () => ({
  default: ({ priority: _priority, ...props }: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

describe("Header mobile navigation overlay", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders opaque backgrounds when the hamburger menu is opened", () => {
    render(<Header />);

    const toggleButton = screen.getByLabelText("Toggle navigation");
    fireEvent.click(toggleButton);

    const closeButton = screen.getByLabelText("Close navigation");
    const overlay = closeButton.closest(".fixed");
    expect(overlay).not.toBeNull();
    expect(overlay).toHaveClass("bg-white");
    expect(overlay).not.toHaveClass("bg-background/95");

    const mobileNav = screen
      .getAllByRole("navigation")
      .find((nav) => nav.classList.contains("space-y-3"));
    expect(mobileNav).toBeDefined();

    const sheet = mobileNav?.closest("div");
    expect(sheet).not.toBeNull();
    expect(sheet).toHaveClass("bg-white");
    expect(sheet).toHaveClass("min-h-full");

    const mobileLink = screen.getAllByRole("link", { name: "Why Teams Call Us" }).at(-1);
    expect(mobileLink).toBeDefined();
    expect(mobileLink).toHaveClass("bg-neutral-50");
  });
});
