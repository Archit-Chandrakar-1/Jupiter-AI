'use client';

import { User, Settings, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface NavbarProps {
  onHistoryClick: () => void;
}

export default function Navbar({ onHistoryClick }: NavbarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-black/40 backdrop-blur-sm border-b border-[var(--purple)] px-4 flex items-center justify-between z-50">
      <div className="text-2xl font-bold">
        Jupiter<span className="text-[var(--yellow)]">AI</span>
      </div>
      <div className="flex items-center space-x-6">
        <button
          onClick={onHistoryClick}
          className="text-white hover:text-[var(--yellow)] transition-colors"
        >
          History
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarFallback className="bg-[var(--purple)] text-white">
                JD
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="cursor-pointer">
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-red-500">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}