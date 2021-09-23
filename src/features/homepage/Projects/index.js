import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../../common/Error";
import { StatusChecker } from "../../../common/StatusChecker";
import Teil from "../../../common/Teil";
import { fetchRepos, selectError, selectLoading, selectRepos } from "../reposSlice";
import { Wrapper } from "./styled";

const Projects = () => {
  const demoBaseLink = "https://izabelanowak.github.io/";

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const repos = useSelector(selectRepos);

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  return (
    <StatusChecker isError={isError} isLoading={isLoading}>
      <Wrapper>
        {repos.map(project =>
          <Teil
            key={project.id}
            title={project.name}
            description={project.description}
            demoLink={`${demoBaseLink}${project.name}`}
            codeLink={project.html_url}
          />
        )}
      </Wrapper>
    </StatusChecker>
  );
};
export default Projects;