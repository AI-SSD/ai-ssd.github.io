import { ChevronDown } from "lucide-react";

export function NavMenu() {
  return (
    <div className="flex items-center w-full h-20">
      <div className="flex-1 flex justify-center">
        <nav className="flex items-center gap-8">
          {/* About dropdown */}
          <div className="dropdown-wrapper group relative">
            <button className="text-lg font-medium hover:text-primary focus:outline-none flex items-center gap-1">
              About
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="dropdown-content invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-1 transition-all duration-300 z-50">
              <div className="bg-popover rounded-md shadow-md border p-2 min-w-[150px]">
                <a
                  href="/about/team"
                  className="block px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                >
                  Team
                </a>
              </div>
            </div>
          </div>

          {/* Goals & Tasks link */}
          <a
            href="/goals-tasks"
            className="text-lg font-medium hover:text-primary"
          >
            Goals & Tasks
          </a>

          {/* Resources dropdown */}
          <div className="dropdown-wrapper group relative">
            <button className="text-lg font-medium hover:text-primary focus:outline-none flex items-center gap-1">
              Resources
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="dropdown-content invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-1 transition-all duration-300 z-50">
              <div className="bg-popover rounded-md shadow-md border p-2 min-w-[200px]">
                <a
                  href="/resources/publications"
                  className="block px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                >
                  Scientific Publications
                </a>
                <a
                  href="/resources/tools"
                  className="block px-4 py-2 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                >
                  Tools
                </a>
              </div>
            </div>
          </div>

          {/* Opportunities link */}
          <a
            href="/opportunities"
            className="text-lg font-medium hover:text-primary"
          >
            Opportunities
          </a>

          {/* News and Events link */}
          <a
            href="/news-events"
            className="text-lg font-medium hover:text-primary"
          >
            News and Events
          </a>
        </nav>
      </div>

      {/* Empty div to balance the layout */}
      <div className="invisible flex items-center">
        <span className="font-bold text-xl">AI-SSD</span>
      </div>
    </div>
  );
}
