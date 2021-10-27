import { useFormContext } from 'react-hook-form';

interface Props {
    explainByErrorTypes: Array<{ type: string; explain: string }>;
    name: string;
}

const ExplainError: React.VFC<Props> = ({ explainByErrorTypes, name }) => {
    const {
        formState: { errors }
    } = useFormContext();

    const errorType = errors ? errors[name]?.type : null;

    const error = explainByErrorTypes.find((item) => item.type === errorType);
    return <>{error && <div className="error">{error.explain}</div>}</>;
};

export default ExplainError;
