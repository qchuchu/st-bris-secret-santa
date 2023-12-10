import { FC, ReactNode } from "react";
import "./Wrapper.css";
import Snowfall from 'react-snowfall'

interface WrapperProps {
    children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => (
    <div className="wrapper">
        <Snowfall />
        {children}
    </div>
);

export default Wrapper;
