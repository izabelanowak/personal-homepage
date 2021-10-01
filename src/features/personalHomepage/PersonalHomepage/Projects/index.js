import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusChecker } from "../../../../common/StatusChecker";
import Teil from "../../../../common/Teil";
import { Wrapper } from "./styled";
import { fetchRepos, selectError, selectLoading, selectRepos } from "../reposSlice";

const Projects = () => {
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
            title={project.name.replaceAll('-' , ' ')}
            description={project.description}
            demoLink={project.homepage}
            codeLink={project.html_url}
          />
        )}
      </Wrapper>
    </StatusChecker>
  );
};
export default Projects;