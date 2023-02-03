import Container from "components/container"
import Meta from "components/meta"
import styles from 'styles/form.module.css'

export default function Form() {
    return (
        
        <Container>
            <Meta pageTitle="フォーム"/>
              <div className={styles.Form}>
              <h2 className={styles.request}>資料のご請求はこちら</h2>
              <div className={styles.FormItem}>
                 <p className={styles.FormItemLabel}>
                   <span className={styles.FormItemLabelRequired}>必須</span>お名前</p>
                     <input type={"text"} className={styles.FormItemInput} placeholder={"例）鈴木一郎"}></input>
              </div>
              <div className={styles.FormItem}>
                 <p className={styles.FormItemLabel}>
                   <span className={styles.FormItemLabelRequired}>必須</span>メールアドレス</p>
                     <input type={"text"} className={styles.FormItemInput} placeholder={"例）example@gmail.com"}></input>
              </div>
              <div className={styles.FormItem}>
                 <p className={styles.FormItemLabel}>
                   <span className={styles.FormItemLabelRequired}>必須</span>郵便番号</p>
                     <input type={"text"} className={styles.FormItemInput} placeholder={"例）0000000"}></input>
              </div>
              <div className={styles.FormItem}>
                 <p className={styles.FormItemLabel}>
                    <span className={styles.FormItemLabelRequired}>必須</span>ご住所</p>
                     <input type={"text"} className={styles.FormItemInput} placeholder={"例）A県B市C町00-00"}></input>
              </div>
              <div className={styles.FormItem}>
                 <p className={styles.FormItemLabel}>
                    <span className={styles.FormItemLabelRequired}>必須</span>お電話番号</p>
                     <input type="number" className={styles.FormItemInput} placeholder={"例）00000000000"}></input>
              </div>
              <div className={styles.FormItem}>
                 <p className={styles.FormItemLabel}>
                     <span className={styles.FormItemLabelRequired}>必須</span>メッセージ</p>
                      <textarea className={styles.FormItemTextarea}></textarea>
              </div>
            </div>
            <input type="submit" className={styles.FormBtn} value="送信する"/>
            <br/>
        </Container>
    )
}