var Projects = [
    { projectName: "Big1", projectDate: "12:53 / 21/05/16", projectLink:"/projects/1234" },
    { projectName: "Big2", projectDate: "12:53 / 22/05/16", projectLink:"/projects/1235" },
    { projectName: "Big3", projectDate: "12:53 / 23/05/16", projectLink:"/projects/1236" },
]

<div className={classes.listContainer}>
    {Projects.map(project => (
        <ProjectListItems
            projectName={project.projectName}
            projectEditedDate={project.projectDate}
            projectLink={project.projectLink}
        />
    ))}
</div>