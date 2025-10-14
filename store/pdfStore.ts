import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { encryptedStorage } from '@/libs/storage'

interface PdfState {
  file: File | null
  setFile: (file: File) => void
  clearFile: () => void
}

export const usePdfStore = create<PdfState>()(
  persist(
    (set) => ({
      file: null,
      setFile: (file: File) => set({ file }),
      clearFile: () => set({ file: null }),
    }),
    { name: 'pdf', storage: encryptedStorage }
  )
)
