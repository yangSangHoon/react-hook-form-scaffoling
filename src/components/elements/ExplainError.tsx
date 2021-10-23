interface Props {
    explainByErrorTypes: Array<{ type: string; explain: string }>;
    errorType: string;
}

const ExplainError: React.VFC<Props> = ({ explainByErrorTypes, errorType }) => {
    const error = explainByErrorTypes.find((item) => item.type === errorType);
    return <>{error && <div>{error.explain}</div>}</>;
};

export default ExplainError;
