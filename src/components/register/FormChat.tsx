import { ContentFormChat, ImageAdmin, ContentForm } from '../../styles/styles';
import admin_test from '../../assets/images/admin_test.jpg';

interface Props {
    cuestion: string;
}

export default function FormChat(props: Props) {
    const { cuestion } = props;

    return (
        <ContentFormChat>
            <ImageAdmin src={admin_test} alt='imagen del admin' />
            <ContentForm>
                <h3>{cuestion}</h3>
                <form onSubmit={()=>{}}>

                </form>
            </ContentForm>
        </ContentFormChat>
    );
};
