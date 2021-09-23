import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Teil from "../../../common/Teil";
import { fetchRepos, selectRepos } from "../reposSlice";


const Projects = () => {
  const demoBaseLink = "https://izabelanowak.github.io/";
  const dispatch = useDispatch();
  const repos = useSelector(selectRepos);

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  console.log(repos);
  return (
    <>
      {repos.map(project =>
        <Teil
          title={project.name}
          description={project.description}
          demoLink={`${demoBaseLink}${project.name}`}
          codeLink={project.html_url}
        />
      )}
    </>
  );
};
export default Projects;