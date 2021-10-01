import { LoadingContainer, LoadingInfo, StyledSpinner } from "./styled";

export const Loading = () => (
  <LoadingContainer>
    <LoadingInfo>
      Please wait, projects are being loaded…
    </LoadingInfo>
    <StyledSpinner />
  </LoadingContainer>
);
