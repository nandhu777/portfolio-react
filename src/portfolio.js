const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: '❤',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nandhu Suresh',
  role: 'Full stack developer',
  description:
    'A Passionate Associate with over 1.8 years of experience in developing java web applications, and supporting with client’s data analysis and requirements. Have good Communication Skills and truly collaborative, looking towards key participation in team-oriented task and immediate challenges,now currently develops and create portofolio webiste and im day by day learning more into ecommerce development',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/nandhu-suresh-62b8061ba/',
    github: 'https://github.com/nandhu777',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Boat(Board of apprenticeship training)',
    description:
      'Project deals with the enhancement and development of new modules for the NATS web portal. The NATS (NationalApprenticeship Training Scheme) is one of the major programfrom Government of India for Skilling Indian Youths',
    stack: ['java', 'mysql', 'structs'],
  },
  {
    name: 'Drug reaction(A prototype developed for a set of medico group people aside from work)',
    description:
      'Its a prototype still in development and its based on user can enter the drug reaction details and its symptoms and the related search result will be showned.',
    stack: ['java', 'SpringBoot', ' Mysql'],
  },
  {
    name: 'Ecommerce website',
    description:
      'A simple ecommerce website currently working on its payment and payout section still in development',
    stack: ['java', 'springboot', 'react.js','mysql'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Git',
  'RestApi',
  'SpringBoot',
  'microservice'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nashzayn1@gmail.com',
}

export { header, about, projects, skills, contact }
