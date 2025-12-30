DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
-- Création de la table des projets
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  link TEXT
);

-- Données d'exemple pour les projets
INSERT INTO projects (title, description, link) VALUES 
('Portfolio V2', 'Mon portfolio personnel développé avec Next.js et Tailwind CSS.', 'https://github.com/mickael68/PortfolioV2'),
('E-Commerce Demo', 'Une boutique en ligne fictive avec panier et paiement Stripe.', 'https://github.com/mickael68/ecommerce-demo'),
('Task Manager', 'Une application de gestion de tâches simple et intuitive.', 'https://github.com/mickael68/task-manager');

-- Création de la table des compétences
CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  level TEXT,
  icon TEXT
);

-- Données d'exemple pour les compétences
INSERT INTO skills (name, level, icon) VALUES 
('React', 'Expert', 'react.svg'),
('Next.js', 'Avancé', 'next.svg'),
('TypeScript', 'Intermédiaire', 'typescript.svg'),
('Tailwind CSS', 'Expert', 'tailwind.svg'),
('PostgreSQL', 'Débutant', 'postgresql.svg'),
('Git', 'Avancé', 'git.svg');
