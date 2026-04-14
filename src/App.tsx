/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Bell, 
  Settings, 
  User, 
  Plus, 
  Search, 
  ChevronDown, 
  LayoutGrid, 
  FolderOpen,
  Import,
  Copy,
  MoreHorizontal,
  MapPin,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Types ---

interface ProjectCardProps {
  title: string;
  location: string;
  description?: string;
  status: string;
  claimState: string;
  claimStateColor: string;
  completeness: number;
  image?: string;
  type?: string;
  evidence?: string;
  isDemo?: boolean;
  badge?: string;
  badgeColor?: string;
}

// --- Components ---

const StatCard = ({ label, value, color }: { label: string, value: string, color: string }) => (
  <div className={`bg-white p-6 rounded-xl border-l-4 ${color} shadow-sm flex flex-col justify-between h-32`}>
    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</span>
    <span className="text-4xl font-bold text-gray-900">{value}</span>
  </div>
);

const ProjectCard = ({ 
  title, 
  location, 
  description, 
  status, 
  claimState, 
  claimStateColor, 
  completeness, 
  image,
  type,
  evidence,
  isDemo,
  badge,
  badgeColor
}: ProjectCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full"
  >
    {image && (
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {isDemo && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tight text-gray-900">
            Demo Case
          </div>
        )}
      </div>
    )}
    
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-gray-900 leading-tight flex-1 mr-4">{title}</h3>
        {badge && (
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tight ${badgeColor}`}>
            {badge}
          </span>
        )}
      </div>
      
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <MapPin size={14} className="mr-1" />
        {location}
      </div>

      {description && (
        <p className="text-gray-500 text-xs italic mb-6">{description}</p>
      )}

      <div className="mt-auto space-y-4">
        <div className="flex justify-between text-xs">
          <div className="flex flex-col">
            <span className="text-gray-400 uppercase font-medium mb-1">Status</span>
            <span className="font-semibold text-gray-900">{status}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-gray-400 uppercase font-medium mb-1">Claim State</span>
            <span className={`font-semibold px-2 py-0.5 rounded ${claimStateColor}`}>
              {claimState}
            </span>
          </div>
        </div>

        {type && evidence && (
          <div className="flex justify-between text-xs pt-2 border-t border-gray-50">
            <div className="flex flex-col">
              <span className="text-gray-400 uppercase font-medium mb-1">Type</span>
              <span className="font-semibold text-gray-900">{type}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-gray-400 uppercase font-medium mb-1">Evidence</span>
              <span className="font-semibold text-gray-900">{evidence}</span>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-gray-900">Completeness</span>
            <span className="text-blue-600">{completeness}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${completeness}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-blue-900 h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-bottom border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold">T</div>
            <span className="text-xl font-bold tracking-tight">TraceWall-HK</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="https://0415-landing.netlify.app/" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Cases</a>
            <a href="https://new-item.netlify.app/#" className="text-blue-900 font-bold border-b-2 border-blue-900 pb-1">New Project</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">Workspace</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
            <Settings size={20} />
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm cursor-pointer">
            <img 
              src="https://picsum.photos/seed/user/100/100" 
              alt="User" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Projects</h1>
          <p className="text-gray-500 text-lg">Browse demo cases and user-created workspaces.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-800 transition-all shadow-md active:scale-95"
            onClick={() => {
    window.location.href = "https://new-item.netlify.app/";
  }}
            >
            <Plus size={20} />
            New Project
          </button>
          <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-bold flex items-center gap-2 border border-gray-200 hover:bg-gray-50 transition-all shadow-sm active:scale-95">
            <Import size={20} />
            Import Project
          </button>
          <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-bold flex items-center gap-2 border border-gray-200 hover:bg-gray-50 transition-all shadow-sm active:scale-95">
            <Copy size={20} />
            Duplicate Case
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <StatCard label="Total Projects" value="5" color="border-blue-900" />
          <StatCard label="Demo Cases" value="3" color="border-gray-400" />
          <StatCard label="User Projects" value="2" color="border-blue-400" />
          <StatCard label="Claim-Ready" value="1" color="border-green-500" />
          <StatCard label="In Setup" value="1" color="border-orange-400" />
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap items-center gap-4 mb-12">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search projects, locations, or types..." 
              className="w-full pl-12 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-blue-900/20 transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            {[
              { label: 'Source', value: 'All' },
              { label: 'Project Type', value: 'All' },
              { label: 'Status', value: 'All' },
              { label: 'Evidence', value: 'All' }
            ].map((filter) => (
              <button key={filter.label} className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <span className="text-gray-500">{filter.label}:</span>
                <span className="text-gray-900">{filter.value}</span>
                <ChevronDown size={14} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Demo Cases Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-blue-900" size={24} />
            <h2 className="text-2xl font-bold tracking-tight">Demo Cases</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              isDemo
              title="Central Tower - Level 18 Tenant Reinstatement"
              location="Central, HK"
              description="Tenant Reinstatement Fit-out"
              status="Baseline Conventional"
              claimState="Module D Locked"
              claimStateColor="bg-red-100 text-red-700"
              completeness={82}
              image="https://picsum.photos/seed/central/800/600"
              onClick={() => {window.location.href = "https://central-tower-level-8.netlify.app/";}}
            />
            <ProjectCard 
              isDemo
              title="Harbour Business Centre - Low-Carbon Fit-out Upgrade"
              location="Wan Chai, HK"
              description="ESG-led Fit-out Upgrade"
              status="Design Option Study"
              claimState="Screening Only"
              claimStateColor="bg-gray-100 text-gray-700"
              completeness={68}
              image="https://picsum.photos/seed/harbour/800/600"
              href="https://harbour-business-centre.netlify.app/"
            />
            <ProjectCard 
              isDemo
              title="Kowloon Bay Flex Office - Decommissioning Pilot"
              location="Kowloon Bay, HK"
              description="Decommissioning Pilot"
              status="Decommissioning Pilot"
              claimState="Partial Unlock"
              claimStateColor="bg-green-100 text-green-700"
              completeness={91}
              image="https://picsum.photos/seed/kowloon/800/600"
              href="https://kowloon-bay.netlify.app/"
            />
          </div>
        </section>

        {/* My Projects Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FolderOpen className="text-blue-900" size={24} />
            <h2 className="text-2xl font-bold tracking-tight">My Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="New Project 01"
              location="Central, HK"
              status="Refurbishment"
              claimState="In Setup"
              claimStateColor="bg-orange-100 text-orange-700"
              completeness={42}
              type="Refurbishment"
              evidence="Basic"
              badge="In Setup"
              badgeColor="bg-orange-100 text-orange-700"
            />
            <ProjectCard 
              title="Imported Project A"
              location="Quarry Bay, HK"
              status="New Fit-out"
              claimState="Preliminary Only"
              claimStateColor="bg-blue-100 text-blue-700"
              completeness={74}
              type="New Fit-out"
              evidence="Preliminary Only"
              badge="Active"
              badgeColor="bg-green-100 text-green-700"
            />
            {/* Start New Project Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-12 bg-gray-50/50 hover:bg-gray-50 transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                onClick={() => {
    window.location.href = "https://new-item.netlify.app/";
  }}
                >
                <Plus className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Start a new project</h3>
              <p className="text-gray-500 text-center text-sm mb-8 max-w-[200px]">
                Initialize a fresh workspace to track and claim your circular fit-out metrics.
              </p>
              <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-bold border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                onClick={() => {
    window.location.href = "https://new-item.netlify.app/";
  }}
                >
                New Project
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 px-8 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight">Architectural Ledger</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 TraceWall-HK. Professional circular economy tracking for the built environment.
            </p>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
