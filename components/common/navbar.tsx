'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, ShoppingBag, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-serif tracking-[0.25em] font-light"
          >
            SEOR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList className="flex gap-8">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="text-sm font-medium tracking-wide text-gray-700 transition-colors hover:text-black"
                  >
                    HOME
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/products/earrings"
                    className="text-sm font-medium tracking-wide text-gray-700 transition-colors hover:text-black"
                  >
                    EARRINGS
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/products/necklaces"
                    className="text-sm font-medium tracking-wide text-gray-700 transition-colors hover:text-black"
                  >
                    NECKLACES
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-5">
            {/* Search bar */}
            <div className="relative hidden sm:flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[180px] h-8 rounded-md pl-8 text-xs"
              />
              <Search className="absolute left-2 h-3.5 w-3.5 text-gray-500" />
            </div>

            {/* Account */}
            <div className="flex items-center">
              <SignedIn>
                <div className="relative group">
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox:
                          'h-6 w-6 transition-transform group-hover:scale-110',
                      },
                    }}
                  />
                </div>
              </SignedIn>

              <SignedOut>
                <SignInButton mode="modal">
                  <div className="cursor-pointer text-gray-700 hover:text-black transition-colors">
                    <User className="h-4 w-4" />
                    <span className="sr-only">Account</span>
                  </div>
                </SignInButton>
              </SignedOut>
            </div>

            {/* Bag icon */}
            <Link
              href="/cart"
              className="flex items-center text-gray-700 transition-colors hover:text-black"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="sr-only">Bag</span>
            </Link>

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-6 pt-6">
                  <Link
                    href="/"
                    className="text-sm font-medium tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    HOME
                  </Link>

                  <Link
                    href="/products/earrings"
                    className="text-sm font-medium tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    EARRINGS
                  </Link>

                  <Link
                    href="/products/necklaces"
                    className="text-sm font-medium tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    NECKLACES
                  </Link>

                  <Separator />

                  {/* Mobile search */}
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full h-9 rounded-md pl-8 text-sm"
                    />
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  </div>

                  <Link
                    href="/account"
                    className="flex items-center gap-2 text-sm font-medium tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    ACCOUNT
                  </Link>

                  <Link
                    href="/cart"
                    className="flex items-center gap-2 text-sm font-medium tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    <ShoppingBag className="h-4 w-4" />
                    BAG
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
