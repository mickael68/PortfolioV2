DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS experiences;

-- Création de la table des projets
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  link TEXT,
  type TEXT CHECK (type IN ('Formation', 'Personnel', 'Professionnel'))
);

-- Données d'exemple pour les projets
INSERT INTO projects (title, description, link, type) VALUES 
('Portfolio V2', 'Mon portfolio personnel développé avec Next.js et Tailwind CSS.', 'https://github.com/mickael68/PortfolioV2', 'Personnel'),
('E-Commerce Demo', 'Une boutique en ligne fictive avec panier et paiement Stripe.', 'https://github.com/mickael68/ecommerce-demo', 'Formation'),
('Task Manager', 'Une application de gestion de tâches simple et intuitive.', 'https://github.com/mickael68/task-manager', 'Personnel');

-- Création de la table des compétences
CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  level TEXT,
  icon TEXT
);

-- Données d'exemple pour les compétences
INSERT INTO skills (name, level, icon) VALUES 
('React', 'Débutant', 'svg/react-svgrepo-com.svg'),
('Next', 'Débutant', 'svg/next-dot-js-svgrepo-com.svg'),
('TypeScript', 'Débutant', 'svg/typescript-icon-svgrepo-com.svg'),
('Tailwind CSS', 'Intermédiaire', 'svg/tailwind-svgrepo-com.svg'),
('PostgreSQL', 'Intermédiaire', 'svg/postgresql-logo-svgrepo-com.svg'),
('Git', 'Outil de travail', 'svg/git-svgrepo-com.svg'),
('JavaScript', 'Débutant', 'svg/javascript-svgrepo-com.svg'),
('Java', 'Débutant', 'svg/java-svgrepo-com.svg'),
('Symfony', 'Débutant', 'svg/symfony-svgrepo-com.svg'),
('HTML', 'Avancé', 'svg/html-5-svgrepo-com.svg'),
('CSS', 'Avancé', 'svg/css-3-svgrepo-com.svg'),
('Bootstrap', 'Avancé', 'svg/bootstrap-svgrepo-com.svg'),
('PHP', 'Débutant', 'svg/php-svgrepo-com.svg'),
('Laravel', 'Intermédiaire', 'svg/laravel-svgrepo-com.svg'),
('Magento 2', 'Débutant', 'svg/magento-color-svgrepo-com.svg'),
('Windows', 'OS', 'svg/windows-applications-svgrepo-com.svg'),
('WSL Ubuntu', 'OS', 'svg/ubuntu-svgrepo-com.svg'),
('Bureautique', 'Logiciel', 'svg/microsoft-svgrepo-com.svg'),
('Wordpress', 'CMS', 'svg/wordpress-svgrepo-com.svg'),
('Jira', 'Logiciel', 'svg/jira-svgrepo-com.svg'),
('Confluence', 'Logiciel', 'svg/confluence-svgrepo-com.svg'),
('Canva', 'Logiciel', 'svg/canva-svgrepo-com.svg'),
('GitLab', 'Hébergement Git', 'svg/gitlab-svgrepo-com.svg'),
('GitHub', 'Hébergement Git', 'svg/github-142-svgrepo-com.svg'),
('Bitbucket', 'Hébergement Git', 'svg/bitbucket-svgrepo-com.svg'),
('Docker', 'Logiciel', 'svg/docker-svgrepo-com.svg'),
('Jetbrains', 'Logiciel', 'svg/jetbrains-svgrepo-com.svg'),
('Visual Studio', 'Logiciel', 'svg/visual-studio-svgrepo-com.svg'),
('Visual Studio Code', 'Logiciel', 'svg/visual-studio-code-svgrepo-com.svg'),
('C#', 'Débutant', 'svg/csharp-svgrepo-com.svg'),
('Blazor', 'Débutant', 'svg/blazor-svgrepo-com.svg'),
('Bash', 'Débutant', 'svg/bash-icon-svgrepo-com.svg');

CREATE TABLE IF NOT EXISTS experiences (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT,
  start_date DATE,
  end_date DATE,
  description TEXT,
  type TEXT CHECK (type IN ('Professionnel', 'Académique'))
);

INSERT INTO experiences (title, company, start_date, end_date, description, type) VALUES 
('Développeur Magento 2 - Stage de 4 mois', 'WebTotem', '2025-03-10', '2025-07-10', 'Développement d''applications web avec Magento 2.', 'Professionnel'),
('Développeur Ruby on Rails - Stage de 5 mois', 'CTAI', '2026-02-16', '2026-07-10', 'Développement d''applications web avec Ruby on Rails.', 'Professionnel'),
('Baccalauréat Général', 'Lycée', '2020-09-01', '2023-06-30', 'Baccalauréat Général', 'Académique'),
('Étudiant en Informatique', 'UHA 4.0', '2024-09-02', NULL, 'Préparation à la Licence Professionnelle Métiers de l’Informatique en mode projets.', 'Académique');