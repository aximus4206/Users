import { useTranslation } from "react-i18next";
import TableContainer from "../../components/UserTable/TableContainer";

function UsersPage(): JSX.Element {
    const {t} = useTranslation();
    return (
    <>
        <h1>{t('users_page')}</h1>
        <TableContainer />
    </>
    )
}
export default  UsersPage;