import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiExpress,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiNpm,
  SiFramer
} from 'react-icons/si';
import { Database, Server, Cpu, Layers, Code2, Bot } from 'lucide-react';

export default function SkillIcon({ name, className = "w-5 h-5" }) {
  switch (name) {
    case 'react':
      return <SiReact className={className} />;
    case 'nextjs':
      return <SiNextdotjs className={className} />;
    case 'nodejs':
      return <SiNodedotjs className={className} />;
    case 'typescript':
      return <SiTypescript className={className} />;
    case 'javascript':
      return <SiJavascript className={className} />;
    case 'tailwind':
      return <SiTailwindcss className={className} />;
    case 'mongodb':
      return <SiMongodb className={className} />;
    case 'python':
      return <SiPython className={className} />;
    case 'cplusplus':
      return <SiCplusplus className={className} />;
    case 'mysql':
      return <SiMysql className={className} />;
    case 'express':
      return <SiExpress className={className} />;
    case 'html5':
      return <SiHtml5 className={className} />;
    case 'css3':
      return <SiCss className={className} />;
    case 'git':
      return <SiGit className={className} />;
    case 'github':
      return <SiGithub className={className} />;
    case 'postman':
      return <SiPostman className={className} />;
    case 'vite':
      return <SiVite className={className} />;
    case 'npm':
      return <SiNpm className={className} />;
    case 'framer':
      return <SiFramer className={className} />;
    case 'api':
      return <Server className={className} />;
    case 'dbms':
    case 'sql':
      return <Database className={className} />;
    case 'vscode':
      return <Code2 className={className} />;
    case 'groq':
      return <Bot className={className} />;
    case 'dsa':
      return <Cpu className={className} />;
    case 'oop':
      return <Layers className={className} />;
    default:
      return <Code2 className={className} />;
  }
}
