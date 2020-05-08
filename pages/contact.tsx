import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Page from '~/components/Page'
import styles from '~/components/styles/modules/components/Form.module.scss'
import generalStyles from '~/components/styles/modules/layouts/General.module.scss'

type FormItemProps = {
  label: string
  children: React.ReactNode
}

const FormItem = ({ label, children }: FormItemProps) => (
  <div className={styles.formParts}>
    <label>{label}</label>
    {children}
  </div>
)

const Contact = () => (
  <>
    <Head>
      <script src="https://sdk.form.run/js/v2/formrun.js"></script>
      <script src="https://www.google.com/recaptcha/api.js"></script>
    </Head>
    <NextSeo title="Contact - 千柩堂" description="お問い合わせ" />
    <Page heading="Contact" description="お問い合わせ">
      <form
        className="formrun"
        action="https://form.run/api/v1/r/lyxlte10jq1mvw070axhbny7"
        method="post"
      >
        <FormItem label="お名前 *">
          <input name="お名前" type="text" data-formrun-required />
        </FormItem>

        <FormItem label="メールアドレス *">
          <input
            name="メールアドレス"
            type="text"
            data-formrun-type="email"
            data-formrun-required
          />
          <div
            data-formrun-show-if-error="メールアドレス"
            className={styles.formError}
          >
            メールアドレスを正しく入力してください
          </div>
        </FormItem>

        <FormItem label="件名">
          <input name="件名" type="text" />
        </FormItem>

        <FormItem label="メッセージ本文 *">
          <textarea name="メッセージ本文" data-formrun-required></textarea>
          <div
            data-formrun-show-if-error="メッセージ本文"
            className={styles.formError}
          >
            メッセージ本文を入力してください
          </div>
        </FormItem>

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
  </>
)

export default Contact
