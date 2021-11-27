import React, { VFC } from 'react'
import Layout from '../components/Layout'
import ThemeSwitcher from '../components/ThemeSwitcher'

interface Props {}

const HomePage: VFC<Props> = () => {
  return (
    <Layout>
      <div className="c-wrapper">
        <header className="c-header">
          <div className="c-container">
            <div className="c-header_inner">
              <h1 className="c-title">usagizmo</h1>
              <section>
                <h2 className="c-subtitle">Profile</h2>
                <ul className="c-inline-list">
                  <li>Web Engineer</li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://nextjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Next.js
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TypeScript
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </header>

        <main className="c-main">
          <div className="c-container">
            <div className="c-main_inner">
              <section>
                <h2 className="c-subtitle">Works</h2>
                <ul>
                  <li>
                    <strong className="u-property">
                      <a
                        className="u-text-link --line"
                        href="https://github.com/usagizmo/usagizmo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        usagizmo.com
                      </a>
                    </strong>
                    このサイト
                  </li>
                  <li>
                    <strong className="u-property">
                      <a
                        className="u-text-link --line"
                        href="https://github.com/usagizmo/static-site-template"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        static-site-template
                      </a>
                    </strong>
                    静的サイトを作るとき
                  </li>
                  <li>
                    <strong className="u-property">
                      <a
                        className="u-text-link --line"
                        href="https://github.com/usagizmo/nextjs-template"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        nextjs-template
                      </a>
                    </strong>
                    Next.jsでWebアプリを作るとき
                  </li>
                  <li>
                    <strong className="u-property">
                      <a
                        className="u-text-link --line"
                        href="https://tomatimer.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tomatimer
                      </a>
                    </strong>
                    25分間を計るだけ
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="c-subtitle">Links</h2>
                <ul>
                  <li>
                    <strong className="u-property">twitter</strong>
                    <a
                      className="u-text-link --line"
                      href="https://twitter.com/usagizmo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @usagizmo
                    </a>
                  </li>
                  <li>
                    <strong className="u-property">company</strong>
                    <a
                      className="u-text-link --line"
                      href="https://rabi.co.jp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rabi Inc.
                    </a>
                  </li>
                  <li>
                    <strong className="u-property">github</strong>
                    <a
                      className="u-text-link --line"
                      href="https://github.com/usagizmo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      usagizmo
                    </a>
                  </li>
                  <li>
                    <strong className="u-property">qiita</strong>
                    <a
                      className="u-text-link --line"
                      href="https://qiita.com/usagizmo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      usagizmo
                    </a>
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="c-subtitle">Likes</h2>
                <h3 className="c-sub2title">Devices</h3>
                <ul className="c-inline-list --small">
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.kensington.com/ja-jp/p/%E8%A3%BD%E5%93%81/%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AD%E3%83%BC%E3%83%AB/%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF%E3%83%9C%E3%83%BC%E3%83%AB/%E3%82%A8%E3%82%AD%E3%82%B9%E3%83%91%E3%83%BC%E3%83%88%E3%83%9E%E3%82%A6%E3%82%B9-%E3%83%AF%E3%82%A4%E3%83%A4%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF%E3%83%9C%E3%83%BC%E3%83%AB/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Expert Mouse
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://store.google.com/jp/category/phones"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Pixel
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://archisite.co.jp/products/mistel/barocco-md770-rgb-bt/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BAROCCO MD770
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.apple.com/jp/macbook-pro/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MacBook Pro
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://aftershokz.jp/products/bone-conduction-headphone-opencomm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      OpenComm AfterShokz
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.elgato.com/ja/gaming/stream-deck-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Stream Deck XL
                    </a>
                  </li>
                </ul>
                <h3 className="c-sub2title">
                  <a
                    className="u-text-link"
                    href="https://setapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Setapp
                  </a>
                </h3>
                <ul className="c-inline-list --small">
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.macbartender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bartender
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://macpaw.com/cleanmymac"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CleanMyMac X
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://cleanshot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CleanShot X
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://kapeli.com/dash"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dash
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://devutils.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DevUtils
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.flinto.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Flinto
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://binarynights.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ForkLift
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://bjango.com/mac/istatmenus/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      iStat Menus
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.jetsoncreative.com/aerial"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Magic Window Air
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://marked2app.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Marked
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://neededapps.com/metaimage/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MetaImage
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://numi.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Numi
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://pasteapp.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Paste
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://paw.cloud/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Paw
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.renfei.org/snippets-lab/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SnippetsLab
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://typefaceapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Typeface
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.intuitibits.com/products/wifiexplorer/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WiFi Explorer
                    </a>
                  </li>
                </ul>
                <h3 className="c-sub2title">Apps</h3>
                <ul className="c-inline-list --small">
                  <li>
                    <a
                      className="u-text-link"
                      href="https://app.asana.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Asana
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.alfredapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Alfred
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://bitwarden.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bitwarden
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://coteditor.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CotEditor
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://daisydiskapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DaisyDisk
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.deepl.com/ja/translator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DeepL
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="http://displaymenu.milchimgemuesefach.de/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Display Menu
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.dropbox.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dropbox
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://pilotmoon.com/dropshelf/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dropshelf
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.figma.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Figma
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://apps.apple.com/jp/app/gestimer/id990588172"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gestimer
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://giphy.com/apps/giphycapture"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GIPHY CAPTURE
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://peacockmedia.software/mac/integrity-plus/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Integrity plus
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://iterm2.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      iTerm
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://kaleidoscope.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kaleidoscope
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.keka.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Keka
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://magnet.crowdcafe.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Magnet
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.notion.so/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Notion
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://pinegrow.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pinegrow
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.pixelmator.com/pro/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pixelmator Pro
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="http://sequelpro.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sequel Pro
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://sparkmailapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Spark
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://www.sublimemerge.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sublime Merge
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://toggl.com/track/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Toggl Track
                    </a>
                  </li>
                  <li>
                    <a
                      className="u-text-link"
                      href="https://code.visualstudio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visual Studio Code
                    </a>
                  </li>
                </ul>
              </section>
              <ThemeSwitcher />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default HomePage
