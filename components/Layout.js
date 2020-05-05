import Head from 'next/head'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

const meta = {
  title: '千柩堂',
  description: 'ですくりぷしょん',
}

const loadTypekit = () => {
  if (typeof window === 'undefined') return false;

  (function(d) {
    var config = {
      kitId: 'glk4fpk',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    loadTypekit()
  }

  render() {
    const { children, meta } = this.props

    return (
      <>
        <Head>
          <title>{meta.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

Layout.defaultProps = {
  meta: meta,
}

export default Layout
