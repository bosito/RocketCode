import AuthProvider from './AuthProvider';

interface Props {
    children: JSX.Element
};

/**
 * @function GlobalProvider 
 * @descrption permite un mejor acamodo de los providers en caso de trabajar con context Api de react.js
 */

export default function GlobalProvider({ children }: Props) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};