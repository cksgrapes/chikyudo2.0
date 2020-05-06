import Link from 'next/link'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import Layout from '~/components/Layout'
import Page from '~/components/Page'
import ExLink from '~/components/elements/ExLink'

import styles from '~/components/styles/modules/components/Form.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

const Contact = () => {
  return (
    <>
      <Head>
        <script src="https://sdk.form.run/js/v2/formrun.js"></script>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Head>
      <NextSeo title="Contact - 千柩堂" description="お問い合わせ" />
      <Layout>
        <Page heading="Contact" description="お問い合わせ">
          <form
            className="formrun"
            action="https://form.run/api/v1/r/lyxlte10jq1mvw070axhbny7"
            method="post"
          >
            <div className={styles.formParts}>
              <label>お名前 *</label>
              <input name="お名前" type="text" data-formrun-required />
            </div>

            <div className={styles.formParts}>
              <label>メールアドレス *</label>
              <input
                name="メールアドレス"
                type="text"
                data-formrun-type="email"
                data-formrun-required
              />
              <div data-formrun-show-if-error="メールアドレス" className={styles.formError}>
                メールアドレスを正しく入力してください
              </div>
            </div>

            <div className={styles.formParts}>
              <label>件名</label>
              <input name="件名" type="text" />
            </div>

            <div className={styles.formParts}>
              <label>メッセージ本文 *</label>
              <textarea name="メッセージ本文" data-formrun-required></textarea>
              <div data-formrun-show-if-error="メッセージ本文" className={styles.formError}>
                メッセージ本文を入力してください
              </div>
            </div>

            {/* <div
              className="g-recaptcha"
              data-sitekey="6Ld5XZwUAAAAAPuETbqB_sn1QCmsvQQ-g-oWnUMC"
            ></div> */}

            <button
              className={generalStyles.button}
              type="submit"
              data-formrun-error-text="未入力の項目があります"
              data-formrun-submitting-text="送信中..."
            >
              Send
            </button>
          </form>
        </Page>
      </Layout>
    </>
  )
}

export default Contact
