function RowRiwayat(props: any) {
  return (
    <div className="border border-gray-300 rounded-lg bg-white p-4 my-4 shadow-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-2 text-black">
          <div className="col-span-12 md:col-span-4 font-medium">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
        </div>
      </div>
    </div>
  );
}

export default function RiwayatPendidikan() {
  return (
    <div className="container mx-auto p-4 text-center pt-16 text-black">
      <h2 className="text-2xl font-semibold mb-6">Riwayat Pendidikan</h2>
      <RowRiwayat jenjang="SD" sekolah="SDN 1 Gudang" tahun="2011" />
      <RowRiwayat jenjang="SMP" sekolah="SMPN 1 Tanjungsari" tahun="2014" />
      <RowRiwayat jenjang="SMA" sekolah="SMAN 1 Tanjungsari" tahun="2021" />
      <RowRiwayat jenjang="Sarjana" sekolah="Masoem University" tahun="2025" />
    </div>
  );
}
