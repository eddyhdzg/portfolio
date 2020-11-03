import React from "react";
import { SubHeader, Experience, Skill, Language, Education } from "molecules";
import copies from "copywriting";
import { Box } from "atoms";

const Abilities: React.FC = () => {
  const { experience, skills, languages, education } = copies.landing.abilities;

  return (
    <Box
      paddingBottom="2xl"
      flexDirection={{
        md: "row",
      }}
      borderColor="divider"
      borderBottomWidth={1}
    >
      <Box
        flex={{
          md: 1,
        }}
        marginBottom={{
          xs: "7xl",
          md: 0,
        }}
      >
        <SubHeader emoji={experience.emoji}>{experience.title}</SubHeader>
        {experience.jobs.map((job, index) => (
          <Experience
            key={job.company}
            {...job}
            isLast={index + 1 !== experience.jobs.length}
          />
        ))}
      </Box>
      <Box
        flex={{ md: 1 }}
        marginLeft={{
          md: "7xl",
        }}
      >
        <Box marginBottom="7xl">
          <SubHeader emoji={education.emoji}>{education.title}</SubHeader>
          {education.data.map((data, index) => (
            <Education
              key={data.university}
              {...data}
              isLast={index + 1 !== education.data.length}
            />
          ))}
        </Box>

        <Box marginBottom="7xl">
          <SubHeader emoji={skills.emoji}>{skills.title}</SubHeader>
          {skills.data.map((skill, index) => (
            <Skill
              key={skill.subtitle}
              {...skill}
              isLast={index + 1 !== skill.data.length}
            />
          ))}
        </Box>

        <SubHeader emoji={languages.emoji}>{languages.title}</SubHeader>
        {languages.data.map((language, index) => (
          <Language
            key={language.language}
            {...language}
            isLast={index + 1 !== languages.data.length}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Abilities;
