import { useParams, useSearchParams } from "react-router-dom";
import styles from "./BreadCrumb.module.css";
export const Breadcrumb = () => {
    const path = useSearchParams();
    const par=useParams()
    console.log(path,par)
    return (
        <div className={styles.container}>
            <h1>{`UI/UX > Refer & Earn`} </h1>
        </div>
    )
}