import React, { VFC } from 'react'
import Layout from '../components/Layout'
import ThemeSwitcher from '../components/ThemeSwitcher'
import LikesContents from '../components/LikesContents'

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
                        href="https://custimer.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Custimier
                      </a>
                    </strong>
                    Customize+Timer/締め切りを何度でも
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
                <LikesContents />
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
