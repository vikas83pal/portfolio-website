
const {
    SiJava,
    SiPython,
    SiJavascript,
    SiTypescript,
    SiCplusplus,
    SiC,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiSpring,
    SiTailwindcss,
    SiBootstrap,
    SiHtml5,
    SiCss3,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiDocker,
    SiKubernetes,
    SiJenkins,
    SiGit,
    SiGithub,
    SiApachekafka,
    SiFigma,
    SiFirebase,
    SiTensorflow,
    SiPytorch
} = require("react-icons/si");
const { HiChip, HiLightningBolt } = require("react-icons/hi");

const icons = {
    SiJava, SiPython, SiJavascript, SiTypescript, SiCplusplus, SiC, SiReact,
    SiNextdotjs, SiNodedotjs, SiExpress, SiSpring, SiTailwindcss, SiBootstrap,
    SiHtml5, SiCss3, SiMongodb, SiMysql, SiPostgresql, SiDocker, SiKubernetes,
    SiJenkins, SiGit, SiGithub, SiApachekafka, SiFigma, SiFirebase, SiTensorflow, SiPytorch,
    HiChip, HiLightningBolt
};

Object.keys(icons).forEach(key => {
    if (icons[key] === undefined) {
        console.log(`Missing Icon: ${key}`);
    }
});
