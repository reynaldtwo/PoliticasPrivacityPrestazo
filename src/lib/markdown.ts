import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PrivacyContent {
  contentHtml: string;
  title: string;
  updatedAt: string;
  appName: string;
}

export async function getPrivacyContent(): Promise<PrivacyContent> {
  const fullPath = path.join(contentDirectory, 'privacy.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    title: matterResult.data.title,
    updatedAt: matterResult.data.updatedAt,
    appName: matterResult.data.appName,
  } as PrivacyContent;
}
