/**
 * Resume download utility
 * Downloads your professional PDF resume from public folder
 */

/**
 * Download resume PDF - no backend needed!
 * Your actual professional resume is served from public/resume.pdf
 */
export function downloadResumePDF(): void {
  // Direct download from public folder
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.download = `Garvit_Magoo_Resume_${new Date().getFullYear()}.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
