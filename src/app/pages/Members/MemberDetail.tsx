import type { Route } from './+types/MemberDetail';

export default function MemberDetail(props: Route.ComponentProps) {
  const { memberId } = props.params;

  return (
    <h1 className="text-3xl font-medium tracking-tight">
      Membro Detalhe {memberId}
    </h1>
  );
}
