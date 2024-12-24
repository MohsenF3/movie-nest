import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-between">
        <p className="text-center text-sm font-medium leading-loose text-foreground md:text-left">
          Designed and developed by{" "}
          <Link
            href="https://github.com/MohsenF3"
            target="_blank"
            className="font-medium underline underline-offset-4 hover:text-primary"
          >
            Mohsen
          </Link>
          . Check out the repository on&nbsp;
          <Link
            href="https://github.com/MohsenF3/movie-nest"
            target="_blank"
            className="font-medium underline underline-offset-4 hover:text-primary"
          >
            GitHub
          </Link>
          .
        </p>

        <SocialButtons />
      </div>
    </footer>
  );
}

function SocialButtons() {
  return (
    <div
      className="flex items-center gap-5"
      role="navigation"
      aria-label="Social Links"
    >
      <Link
        href="https://github.com/MohsenF3"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github className="size-5 hover:text-primary" aria-hidden="true" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/mohsen-faramarzi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin className="size-5 hover:text-primary" aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </Link>
    </div>
  );
}
