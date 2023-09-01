import reactIcon from '../skillsImage/reactIcon.svg';
import js from '../ProfileImage/js.svg';
import redux from '../skillsImage/redux.svg';
import tailwind from '../skillsImage/tailwind.svg';
import typescript from '../skillsImage/typescript.svg';
import html from '../skillsImage/html.svg';
import css from '../skillsImage/css.svg';
import jest from '../skillsImage/jest.png';
import mocha from '../skillsImage/mocha.svg'
import rtl from '../skillsImage/rtl.svg';
import node from '../skillsImage/nodejs.svg';
import express from '../skillsImage/express.svg';
import sequelize from '../skillsImage/sequelize.svg';
import docker from '../skillsImage/docker.svg';
import sql from '../skillsImage/sql.png';
import git from '../skillsImage/git.svg';
import figma from '../skillsImage/figma.png';
import linux from '../skillsImage/linux.png';
import lint from '../skillsImage/eslint.svg';

const badgesFront = [
{icon:reactIcon, name: 'React'},
{icon: js, name: 'JavaScript'},
{icon: redux, name: 'Redux'},
{icon: tailwind, name: 'Tailwind'},
{icon: typescript, name: 'TypeScript'},
{icon: html, name: 'HTML'},
{icon: css, name: 'CSS'},

];

const badgesBack = [
{icon: node, name: 'Node'},
{icon: typescript, name: 'TypeScript'},
{icon: express, name: 'Express'},
{icon: sequelize, name: 'Sequelize'},
{icon: docker, name: 'Docker'},
{icon: sql, name: 'MySQL'},

];

const badgesTest = [
{icon: jest, name: 'Jest'},
{icon: mocha, name: 'Mocha'},
{icon: rtl, name: 'React Testing Library'}

];

const badgesOther = [
{icon: git, name: 'Git / Github'},
{icon: figma, name: 'Figma'},
{icon: linux, name: 'Linux'},
{icon: lint, name: 'ESLint'},
];

export {
    badgesFront,
    badgesBack,
    badgesTest,
    badgesOther
}