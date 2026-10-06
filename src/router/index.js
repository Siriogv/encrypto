import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '../layouts/PublicLayout.vue'
import WorkspaceLayout from '../layouts/WorkspaceLayout.vue'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import OverviewView from '../views/OverviewView.vue'
import DocumentsView from '../views/DocumentsView.vue'
import SettingsView from '../views/SettingsView.vue'
import WorkspaceSectionView from '../views/WorkspaceSectionView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: PublicLayout, children: [
      { path: '', component: LandingView, meta: { title: 'Documenti, integrità e fiducia' } },
      { path: 'login', component: LoginView, meta: { title: 'Accesso' } },
    ] },
    { path: '/app', component: WorkspaceLayout, children: [
      { path: '', component: OverviewView, meta: { title: 'Dashboard' } },
      { path: 'documenti', component: DocumentsView, meta: { title: 'Documenti' } },
      { path: 'certificazioni', component: WorkspaceSectionView, meta: { title: 'Certificazioni', section: 'certifications' } },
      { path: 'utenti', component: WorkspaceSectionView, meta: { title: 'Utenti e ruoli', section: 'users' } },
      { path: 'impostazioni', component: SettingsView, meta: { title: 'Impostazioni' } },
      { path: ':pathMatch(.*)*', component: NotFoundView, meta: { title: 'Pagina non trovata' } },
    ] },
    { path: '/documenti', redirect: '/app/documenti' },
    { path: '/impostazioni', redirect: '/app/impostazioni' },
    { path: '/:pathMatch(.*)*', component: PublicLayout, children: [{ path: '', component: NotFoundView, meta: { title: 'Pagina non trovata' } }] },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 100, behavior: 'smooth' }
    return { top: 0 }
  },
})
router.afterEach(to => { document.title = `${to.meta.title} · Encrypto` })
export default router
