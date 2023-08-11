import { User, Session } from 'next-auth'

export type FormState = {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    behanceUrl: string;
    dribbbleUrl: string;
    category: string;
};

export interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    behanceUrl: string;
    dribbbleUrl: string;
    category: string;
    id: string;
    createdBy: {
      name: string;
      email: string;
      avatarUrl: string;
      id: string;
    };
}

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    description: string | null;
    avatarUrl: string;
    githubUrl: string | null;
    behanceUrl: string | null;
    dribbbleUrl: string | null;
    linkedinUrl: string | null;
    projects: {
      edges: { node: ProjectInterface }[];
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor: string;
        endCursor: string;
      };
    };
}

export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}

export interface ProjectForm {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  behanceUrl: string;
  dribbbleUrl: string;
  category: string;
}

export type UserNode = {
  id: string
  name: string
  email: string
  avatarUrl: string
  description: string
  githubUrl: string | null
  behanceUrl: string | null
  dribbbleUrl: string | null
  linkedinUrl: string | null
  projects: Array<ProjectNode>
}

export type ProjectNode = {
  id: string
  title: string
  description: string
  image: string
  liveSiteUrl: string
  githubUrl: string
  behanceUrl: string
  dribbbleUrl: string
  likes: number
  category: string
  createdBy: UserNode
}

export type AllProjectsType = {
  node: ProjectNode
}

export type SessionType = {
  user?: UserNode | null | undefined
}
