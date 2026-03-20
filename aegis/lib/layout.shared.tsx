import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'fuma-nama',
  repo: 'fumadocs',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // Fixed brand name so the header doesn't change across renders/builds.
      title: 'Aegis-docs',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
