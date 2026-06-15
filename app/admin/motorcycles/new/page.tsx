import { MotorcycleForm } from '@/app/admin/components/MotorcycleForm'

export default function NewMotorcyclePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-zuume font-normal italic text-black uppercase tracking-tight text-center my-12 ![text-shadow:none] ![-webkit-text-stroke:0]">
        Dodaj Novi Motor
      </h1>
      <MotorcycleForm />
    </div>
  )
}
